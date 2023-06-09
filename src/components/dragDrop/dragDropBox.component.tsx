import { InboxOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';
import React from 'react';

const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  //   action should be changed to back-end url, which we don't have it yet
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
const DragDropBox = () => (
  <Dragger {...props}>
    <p className='ant-upload-drag-icon'>
      <InboxOutlined />
    </p>
    <p className='ant-upload-text'>Click or drag file to this area to upload</p>
    <p className='ant-upload-hint'>TEXT HERE</p>
  </Dragger>
);
export default DragDropBox;
