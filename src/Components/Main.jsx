import React, { useEffect, useRef, useState } from "react";
import Buttons from "./Buttons";
import Me from "./Me";

const Main = () => {
  const [key, setKey] = useState();
  const [prevKeys, setPrevKeys] = useState([]);
  const [isDark, setIsDark] = useState(true);
  const [isAbout, setIsAbout] = useState(false);

  let stopKey = useRef(false);

  const handleKey = (e) => {
    if (stopKey.current) return;
    setKey({ key: e.key, code: e.code });
  };

  const handelChange = (val) => {
    switch (val) {
      case "theme":
        setIsDark(!isDark);
        break;
      case "about":
        setIsAbout(true);
        break;
      case "back":
        setIsAbout(false);
        break;
      case "reset":
        setKey(undefined);
        setPrevKeys([]);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (key) {
      let newPrevs = [key, ...prevKeys];
      if (newPrevs.length >= 21) newPrevs.pop();
      setPrevKeys(newPrevs);
    }
  }, [key]);

  useEffect(() => {
    if (isAbout) stopKey.current = true;
    if (!isAbout) stopKey.current = false;
  }, [isAbout]);

  return (
    <div className={`container flex center ${!isDark && "container-light"}`}>
      {isAbout ? (
        <Me />
      ) : (
        <>
          {key ? (
            <>
              <div
                className={`main-key flex center ${!isDark && "key-light"} `}
              >
                <h1>{key.key}</h1>
                <h2>{key.code}</h2>
              </div>
              <div className="prev-keys flex center">
                <div
                  className={`prev prev-head flex center ${
                    !isDark && "head-light"
                  } `}
                >
                  <h3>key:</h3>
                  <h4>code:</h4>
                </div>
                <div className="prev-track flex">
                  {prevKeys.length > 0
                    ? prevKeys.map((k, i) => {
                        if (i === 0) return "";
                        return (
                          <div
                            className={`prev flex center ${
                              !isDark && "key-light"
                            } `}
                            key={i}
                          >
                            <h3>{k.key}</h3>
                            <h4>{k.code}</h4>
                          </div>
                        );
                      })
                    : ""}
                </div>
              </div>
            </>
          ) : (
            <div
              className={`main-key flex center initial ${
                !isDark && "main-light"
              } `}
            >
              press key to get code
            </div>
          )}
        </>
      )}
      <Buttons isAbout={isAbout} handelChange={handelChange} isDark={isDark} />
    </div>
  );
};

export default Main;
