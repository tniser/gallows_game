function Canvas({ fails, hint, hintPressed, setHintPressed }) {
  return (
    <div
      className="canvas__inner"
      onClick={() =>
        hintPressed ? setHintPressed(false) : setHintPressed(true)
      }
    >
      <div className="hint">
        <div className={hintPressed ? "hint__icon pressed" : "hint__icon"}>
          ?
        </div>
        <div className={hintPressed ? "hint__window" : "hint__window  hide"}>
          <p>{hint}</p>
        </div>
      </div>
      <div className="canvas__line top"></div>
      <div className="canvas__line diag"></div>
      <div className="canvas__line vertical"></div>
      <div className="canvas__line bottom"></div>
      <div className={fails >= 6 ? "man swing" : "man"}>
        <div className="canvas__line rope" id={fails >= 6 ? "show" : ""}></div>
        <div className="man__head" id={fails >= 6 ? "show" : ""}></div>
        <div className="man__body" id={fails >= 1 ? "show" : ""}></div>
        <div
          className={fails >= 6 ? "man__line swing lh" : "man__line lh"}
          id={fails >= 2 ? "show" : ""}
        ></div>
        <div
          className={fails >= 6 ? "man__line swing rh" : "man__line rh"}
          id={fails >= 3 ? "show" : ""}
        ></div>
        <div
          className={fails >= 6 ? "man__line swing ll" : "man__line ll"}
          id={fails >= 4 ? "show" : ""}
        ></div>
        <div
          className={fails >= 6 ? "man__line swing rl" : "man__line rl"}
          id={fails >= 5 ? "show" : ""}
        ></div>
      </div>
    </div>
  );
}

export default Canvas;
