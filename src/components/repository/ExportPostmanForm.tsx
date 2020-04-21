import React from 'react'
import config from '../../config'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@material-ui/core'
import { SlideUp } from 'components/common/Transition'

export default function ExportPostmanForm(props: {
  repoId: number;
  open: boolean;
  onClose: () => void;
  title: string;
}) {
  const { repoId, open, onClose, title } = props
  const postmanLink = `${config.serve}/export/postman?id=${repoId}`
  const markdownLink = `${config.serve}/export/markdown?id=${repoId}&origin=${window.location.origin}`
  const markdownfordeviceLink = `${config.serve}/export/markdownfordevice?id=${repoId}&origin=${window.location.origin}`
  const docxLink = `${config.serve}/export/docx?id=${repoId}&origin=${window.location.origin}`
  // const pdfLink = `${config.serve}/export/pdf?id=${repoId}&origin=${window.location.origin}`
  return (
    <Dialog
      open={open}
      onClose={() => onClose()}
      TransitionComponent={SlideUp}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers={true}>
        <form className="form-horizontal" onSubmit={() => false}>
          <div className="mb5">
            <div>
              Postman:</div>
            <div
              className="alert alert-info"
              role="alert"
              style={{ margin: '8px 0' }}
            >
              <a href={postmanLink} target="_blank" rel="noopener noreferrer">
                {postmanLink}
              </a>
            </div>
            {/* <div>点击以上链接下载，在 Postman 中点击导入（Import），选择从文件导入（Import File）下载的文件。</div> */}
          </div>

          <div>
            <div>Markdown（通用）:</div>
            <div
              className="alert alert-info"
              role="alert"
              style={{ margin: '8px 0' }}
            >
              <a href={markdownLink} target="_blank" rel="noopener noreferrer">
                {markdownLink}
              </a>
            </div>
          </div>
          
          <div>
            <div>Markdown（设备）:</div>
            <div
              className="alert alert-info"
              role="alert"
              style={{ margin: '8px 0' }}
            >
              <a href={markdownfordeviceLink} target="_blank" rel="noopener noreferrer">
                {markdownfordeviceLink}
              </a>
            </div>
          </div>

          <div>
            <div>Docx:</div>
            <div
              className="alert alert-info"
              role="alert"
              style={{ margin: '8px 0' }}
            >
              <a href={docxLink}>{docxLink}</a>
            </div>
          </div>

          {/* <div>
            <div>PDF:</div>
            <div
              className="alert alert-info"
              role="alert"
              style={{ margin: '8px 0' }}
            >
              <a href={pdfLink}>{pdfLink}</a>
            </div>
          </div> */}

          <div className="mt10">
            <Button variant="outlined" onClick={onClose}>
              关闭
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
