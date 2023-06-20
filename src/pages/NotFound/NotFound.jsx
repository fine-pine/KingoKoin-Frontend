import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const handleButtonClick = () => {
    window.location.href = "/";
  };

  return (
    <div className={styles["not-found-container"]}>
      <h1 className={styles["not-found-title"]}>404</h1>
      <p className={styles["not-found-text"]}>존재하지 않는 페이지입니다</p>
      <button
        className={styles["not-found-button"]}
        onClick={handleButtonClick}
      >
        처음 화면으로 돌아가기
      </button>
    </div>
  );
};

export default NotFound;
