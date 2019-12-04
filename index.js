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
  CircularProgress
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
  const { enableOthers, disableOthers, enable, disable } = useKeyboardScopes();
  useEffect(() => {
    if (isDialog) {
      disableOthers("dialog");
      enable("dialog");
    } else {
      enableOthers("dialog");
      disable("dialog");
    }
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
    setScrollViewStyle
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
      setScrollViewStyle
    });
  }, [cancelText, dismissKey, clearDismiss, isDialog]);
  return [
    <Dialog
      open={isDialog}
      onClose={() => {
        setIsDialog(false);
        setDismissKey("_reject");
      }}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {pre}
        {message}
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
                keyMap = index + 1;
              }
              const action = () => dismissDialog(key);
              <ListItem onClick={action}>
                <KeyboardBadge
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
              </ListItem>;
            }
          )}
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>,
    <Provider value={value}>{children}</Provider>
  ];
};
const withDialog = C => props => (
  <DialogProvider>
    <C {...props} />
  </DialogProvider>
);
const useAbortDialog = () => {
  const { setIsDialog, setPromise } = useContext(context);
  const abortDialog = useCallback(() => {
    setIsDialog(false);
    setPromise(null);
  }, [setIsDialog, setPromise]);
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
    setScrollViewStyle
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
        scrollViewStyle = { maxHeight: 300 }
      },
      callback = null
    ) => {
      setTitle(title);
      setCancelText(cancelText);
      setActions(actions);
      setMessage(message);
      setPre(pre);
      setPost(post);
      setContentStyle(contentStyle);
      setScrollViewStyle(scrollViewStyle);
      setIsDialog(true);
      const promise = new Deferred();
      setPromise(promise);
      const outkey = await promise.promise;
      setContentStyle({});
      if (typeof callback === "function") return f(outkey);
      return outkey;
    },
    []
  );
  const [promise, setPromise] = useState();
  useEffect(() => {
    if (!promise) return;
    if (dismissKey === "_reject") {
      promise.reject();
      clearDismiss();
      setPromise(null);
    } else if (dismissKey) {
      promise.resolve(dismissKey);
      clearDismiss();
      setPromise(null);
    }
  }, [dismissKey, promise]);
  return showDialog;
};
const useSpinner = () => {
  const showDialog = useShowDialog();
  const stopDialog = useAbortDialog();
  const spinnerFunc = useCallback(() => {
    showDialog({ message: <CircularProgress /> });
    return stopDialog;
  }, [showDialog, stopDialog]);
  useEffect(
    () => () => {
      stopDialog();
    },
    []
  );
  return spinnerFunc;
};
export default DialogProvider;
export {
  DialogProvider,
  useShowDialog,
  withDialog,
  useAbortDialog,
  useSpinner
};
