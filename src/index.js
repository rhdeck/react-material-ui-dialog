import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback
} from "react";
import {
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
const context = createContext();
const { Provider } = context;

const DialogProvider = ({ children }) => {
  const [isDialog, setIsDialog] = useState(false);
  const [message, setMessage] = useState();
  const [pre, setPre] = useState();
  const [post, setPost] = useState();
  const [title, setTitle] = useState();
  const [actions, setActions] = useState([]);
  const [cancelText, setCancelText] = useState("cancel");
  const [dismissKey, setDismissKey] = useState();
  const [contentStyle, setContentStyle] = useState({});
  const [scrollViewStyle, setScrollViewStyle] = useState({ maxHeight: 300 });
  const clearDismiss = useCallback(() => setDismissKey(null), []);
  const dismissDialog = useCallback(key => {
    setDismissKey(key);
    setIsDialog(false);
  }, []);
  const [isDismissable, setIsDismissable] = useState(true);
  const { enableOthers, disableOthers, enable, disable } = useKeyboardScopes();
  useEffect(() => {
    if (isDialog) {
      disableOthers("dialog");
      enable("dialog");
    } else {
      enableOthers("dialog");
      disable("dialog");
    }
    return () => {
      enableOthers("dialog");
      disable("dialog");
    };
  }, [isDialog]);
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
    setDismissKey
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
      setDismissKey
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
    setDismissKey
  ]);
  const Message = message;
  return [
    <Dialog
      key="dialog"
      open={!!isDialog}
      onClose={() => {
        if (!isDismissable) return;
        setIsDialog(false);
        setDismissKey("_reject");
      }}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {pre}
        {!message ? null : typeof message === "String" ? (
          <DialogContentText>{message}</DialogContentText>
        ) : typeof message === "function" ? (
          <Message dismissDialog={dismissDialog} />
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
                  >
                    {icon && (
                      <ListItemAvatar>
                        <Avatar>{icon}</Avatar>
                      </ListItemAvatar>
                    )}
                    <ListItemText primary={title} secondary={description} />
                  </KeyboardBadge>
                </ListItem>
              );
            }
          )}
      </DialogContent>
      <DialogActions></DialogActions>
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
    if (isDismissable) setDismissKey("_reject");
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
    setCancelText,
    setIsDialog,
    setPre,
    setPost,
    setContentStyle,
    setScrollViewStyle,
    setIsDismissable
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
        isDismissable = true
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
        const deferred = new Deferred();
        setPromise(deferred);
        const outkey = await deferred.promise;
        setContentStyle({});
        if (typeof callback === "function") return callback(outkey);
        return outkey;
      } catch (e) {
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
      setIsDismissable
    ]
  );
  const [promise, setPromise] = useState(null);
  useEffect(() => {
    console.log(
      "Hit useeffect with dismissKey (maybe promise changed too) ",
      dismissKey,
      promise
    );
    if (!promise) return;
    if (dismissKey === "_reject") {
      promise.reject("dismisskey was _reject");
      clearDismiss();
      setPromise(null);
    } else if (dismissKey !== null && typeof dismissKey !== "undefined") {
      promise.resolve(dismissKey);
      clearDismiss();
      setPromise(null);
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
    async ({
      yesText = "Yes I am sure",
      noText = "Never mind",
      ...props
    } = {}) => {
      const result = await showDialog({
        actions: [
          {
            title: yesText,
            key: "yes"
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
  useAreYouSure
};
