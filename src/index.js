import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback
} from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItem,
  ListItemText,
  ListItemAvatar,
  CircularProgress,
  Grid
} from "@material-ui/core";
import Deferred from "es6-deferred";
import {
  useKeyboardScopes,
  KeyboardBadge
} from "react-material-ui-keyboard-badge";
const CUSTOM = "__CUSTOM";
const REJECT = "__REJECT";
const context = createContext();
const { Provider } = context;

const DialogProvider = ({ children }) => {
  const [isDialog, setIsDialog] = useState(false);
  const [message, setMessage] = useState();
  const [pre, setPre] = useState();
  const [post, setPost] = useState();
  const [title, setTitle] = useState();
  const [actions, setActions] = useState([]);
  const [dialogActions, setDialogActions] = useState([]);
  const [cancelText, setCancelText] = useState("cancel");
  const [dismissKey, setDismissKey] = useState();
  const [contentStyle, setContentStyle] = useState({});
  const [scrollViewStyle, setScrollViewStyle] = useState({ maxHeight: 300 });
  const clearDismiss = useCallback(() => setDismissKey(null), []);
  const [state, setState] = useState({});
  const dismissDialog = useCallback(
    key => {
      if (key === CUSTOM) setDismissKey(state);
      else setDismissKey(key);
      setIsDialog(false);
    },
    [state]
  );
  const [isDismissable, setIsDismissable] = useState(true);
  const { enableOthers, disableOthers, enable, disable } = useKeyboardScopes();
  const [disabledSimple, setDisabledSimple] = useState(false);
  useEffect(() => {
    if (isDialog && !disabledSimple) {
      disableOthers("dialog");
      enable("dialog");
      setDisabledSimple(true);
    } else if (!isDialog && disabledSimple) {
      enableOthers("dialog");
      disable("dialog");
      setDisabledSimple(false);
    }
    return () => {
      if (disabledSimple) {
        enableOthers("dialog");
        disable("dialog");
      }
    };
  }, [disabledSimple, isDialog]);
  const [value, setValue] = useState({
    cancelText,
    dismissKey,
    clearDismiss,
    isDialog,
    setMessage,
    setTitle,
    setActions,
    setCancelText,
    setIsDialog,
    setPre,
    setPost,
    setContentStyle,
    setScrollViewStyle,
    setIsDismissable,
    isDismissable,
    setDismissKey,
    setDialogActions,
    setState,
    state
  });
  useEffect(() => {
    setValue({
      cancelText,
      dismissKey,
      clearDismiss,
      isDialog,
      setMessage,
      setTitle,
      setActions,
      setCancelText,
      setIsDialog,
      setPre,
      setPost,
      setContentStyle,
      setScrollViewStyle,
      setIsDismissable,
      isDismissable,
      setDismissKey,
      setDialogActions,
      setState,
      state
    });
  }, [
    cancelText,
    dismissKey,
    clearDismiss,
    isDialog,
    setMessage,
    setTitle,
    setActions,
    setCancelText,
    setIsDialog,
    setPre,
    setPost,
    setContentStyle,
    setScrollViewStyle,
    setIsDismissable,
    isDismissable,
    setDismissKey,
    setDialogActions,
    setState,
    state
  ]);
  const Message = message;
  return [
    <Dialog
      key="dialog"
      open={!!isDialog}
      onClose={() => {
        if (!isDismissable) return;
        setIsDialog(false);
        setDismissKey(REJECT);
      }}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent style={contentStyle}>
        {pre}
        {!message ? null : typeof message === "String" ? (
          <DialogContentText>{message}</DialogContentText>
        ) : typeof message === "function" ? (
          <Message
            dismissDialog={dismissDialog}
            setState={setState}
            state={state}
          />
        ) : (
          message
        )}
        {post}
        {actions &&
          actions.map(
            (
              {
                key,
                icon,
                title,
                hidden,
                keyMap,
                windowsKeyMap,
                macKeyMap,
                description
              },
              index
            ) => {
              if (!keyMap && !windowsKeyMap && !macKeyMap) {
                keyMap = (index + 1).toString();
              }
              const action = () => dismissDialog(key);
              return (
                <ListItem button onClick={action} key={`dialog-item-${index}`}>
                  <KeyboardBadge
                    key={keyMap ? keyMap : index}
                    keyMap={keyMap}
                    windowsKeyMap={windowsKeyMap}
                    macKeyMap={macKeyMap}
                    scope="dialog"
                    action={action}
                    enabled={!hidden}
                    invisible={true}
                  >
                    {({ badgeContent }) => [
                      badgeContent && (
                        <ListItemAvatar key="badgeContent">
                          <Avatar color="primary">{badgeContent}</Avatar>
                        </ListItemAvatar>
                      ),
                      icon && (
                        <ListItemAvatar key="icon">
                          <Avatar>{icon}</Avatar>
                        </ListItemAvatar>
                      ),
                      <ListItemText
                        key="text"
                        primary={title}
                        secondary={description}
                      />
                    ]}
                  </KeyboardBadge>
                </ListItem>
              );
            }
          )}
      </DialogContent>
      {!!dialogActions.length && (
        <DialogActions>
          {dialogActions.map(({ key, title, color, variant }) => (
            <Button
              key={"dialog-action-" + key}
              onClick={() => dismissDialog(key)}
              {...{ color, variant }}
            >
              {title}
            </Button>
          ))}
        </DialogActions>
      )}
    </Dialog>,
    <Provider key="provider" value={value}>
      {children}
    </Provider>
  ];
};
const withDialog = C => props => (
  <DialogProvider>
    <C {...props} />
  </DialogProvider>
);
const useAbortDialog = () => {
  const {
    setIsDialog,
    setDismissKey,
    isDismissable,
    setIsDismissable,
    setPre,
    setPost,
    setMessage
  } = useContext(context);
  const abortDialog = useCallback(() => {
    setIsDismissable && setIsDismissable(true);
    setIsDialog(false);
    if (isDismissable) setDismissKey(REJECT);
    setPre(null);
    setMessage(null);
    setPost(null);
  }, [
    isDismissable,
    setIsDismissable,
    setIsDialog,
    setPre,
    setPost,
    setMessage
  ]);
  return abortDialog;
};
const useShowDialog = () => {
  const {
    dismissKey,
    clearDismiss,
    setMessage,
    setTitle,
    setActions,
    setDialogActions,
    setCancelText,
    setIsDialog,
    setPre,
    setPost,
    setContentStyle,
    setScrollViewStyle,
    setIsDismissable,
    setState
  } = useContext(context);
  const showDialog = useCallback(
    async (
      {
        title,
        cancelText = "Close",
        actions = [],
        message = null,
        pre = null,
        post = null,
        contentStyle = {},
        scrollViewStyle = { maxHeight: 300 },
        isDismissable = true,
        dialogActions = [],
        state
      },
      callback = null
    ) => {
      try {
        setTitle(title);
        setCancelText(cancelText);
        setActions(actions);
        setMessage(() => message);
        setPre(() => pre);
        setPost(() => post);
        setContentStyle(contentStyle);
        setScrollViewStyle(scrollViewStyle);
        setIsDialog(true);
        setIsDismissable(isDismissable);
        setDialogActions(dialogActions);
        setState(state ? state : {});
        const deferred = new Deferred();
        setPromise(deferred);
        const outkey = await deferred.promise;
        setContentStyle({});
        if (typeof callback === "function") return callback(outkey);
        return outkey;
      } catch (e) {
        console.log(e);
        throw "Dismissd dialog without accepted result";
      }
    },
    [
      setTitle,
      setCancelText,
      setActions,
      setMessage,
      setPre,
      setPost,
      setContentStyle,
      setScrollViewStyle,
      setPromise,
      setContentStyle,
      setIsDismissable,
      setDialogActions
    ]
  );
  const [promise, setPromise] = useState(null);
  useEffect(() => {
    if (!promise) return;
    if (dismissKey === REJECT) {
      promise.reject("dismisskey was " + REJECT);
      clearDismiss();
      setPromise(null);
    } else if (dismissKey !== null && typeof dismissKey !== "undefined") {
      clearDismiss();
      setPromise(null);
      promise.resolve(dismissKey);
    }
  }, [dismissKey, promise]);
  return showDialog;
};
const useSpinner = () => {
  const { setIsDismissable } = useContext(context);
  const showDialog = useShowDialog();
  const stopDialog = useAbortDialog();
  const [isShowing, setIsShowing] = useState(false);
  const stop = useCallback(() => {
    if (!isShowing) return;
    setIsShowing(false);
    stopDialog();
  }, [isShowing]);
  const spinnerFunc = useCallback(() => {
    setIsShowing(true);
    const promise = showDialog({
      isDismissable: false,
      message: () => (
        <Grid container justify="center">
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      )
    });
    promise.then(
      () => setIsDismissable(true),
      () => setIsDismissable(true)
    );
    return stop;
  }, [showDialog, stop]);
  useEffect(
    () => () => {
      stop();
    },
    [stop]
  );
  return spinnerFunc;
};
const useAreYouSure = () => {
  const showDialog = useShowDialog();
  return useCallback(
    async ({ yesText = "Yes", noText = "No", ...props } = {}) => {
      const result = await showDialog({
        dialogActions: [
          {
            title: yesText,
            key: "yes",
            color: "primary"
          },
          { title: noText, key: "no" }
        ],
        ...props
      });
      if (result === "yes") {
        return true;
      } else {
        throw "rejected AYS";
      }
    },
    [showDialog]
  );
};
export default DialogProvider;
export {
  DialogProvider,
  useShowDialog,
  withDialog,
  useAbortDialog,
  useSpinner,
  useAreYouSure,
  CUSTOM,
  REJECT
};
