import { Alert, Button, LinearProgress } from "@mui/material";
import Link from "next/link";
import Router from "next/router";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Styles from "../../../../styles/upload.module.scss";
import {
  setSessionAudioName,
  setSessionAudioUrl,
} from "../../../components/SessionStorage";


const Upload = () => {
  const [alertPop, alertPopSet] = useState<JSX.Element>(null);
  const [pValue, pValueSet] = useState<number>(0);

  const asyncAction = async () => {
    pValueSet(33);
    await new Promise((r) => setTimeout(r, 1000));
    Router.push("./edit-audio");
  };

  const upload = async (file: File) => {
    const formData = new FormData();
    formData.append("avatar", file);
    const param = {
      method: "POST",
      body: formData,
    };
 
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length !== 1) {
      alertPopSet(
        <Alert severity="error" className={Styles.error}>
          ファイルは1つずつアップロードしてください。
        </Alert>
      );
    } else if (acceptedFiles[0].type !== "audio/mpeg") {
      alertPopSet(
        <Alert severity="error" className={Styles.error}>
          mp3ファイルをアップロードしてください。
        </Alert>
      );
    } else {
      const file = acceptedFiles[0];
      upload(file);
    }
  }, []);

  const { getRootProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
  });

  return (
    <div className={Styles.papars_wrap}>
      <div {...getRootProps()}>
        <div className={Styles.papar_main}>
          {isDragActive ? (
            <div className={Styles.drop_papar}>
              ドラッグ&ドロップしてください。
            </div>
          ) : null}
          <div className={Styles.papar_line}>
            <div className={Styles.wrap}>
              <div className={Styles.title}>Upload</div>
              <div className={Styles.descriotion}>
                mp3ファイルをここにドロップアウトするか、以下のボタンからファイルを選択してください。
              </div>
              {alertPop}
              <div className={Styles.button_wrap}>
                <Button
                  variant="contained"
                  onClick={open}
                  className={Styles.button}
                >
                  Select Audio
                </Button>
              </div>
              <LinearProgress
                variant="determinate"
                value={pValue}
                className={Styles.progress}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
