import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


const PostTextContent = () => {
  const classes = useStyles();

  const [postText, setPostText] = useState('');

  const handleOnClickPost = async () => {
    alert('clicked post button!');
  };

  return (
    <div style={{ width: '100%' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>
          文字列を登録するやつ
        </h2>
        <div className="postBox" style={{ width: '100%', maxWidth: 600 }}>
          <div>
            <h3>文字列を入力</h3>
            <TextField
              id="post-text"
              label="文字列"
              placeholder="接尾辞木を知りたい文字列を入力"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              helperText="e.g. helloworld"
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              type="search"
              inputProps={{ title: '文字列', maxLength: 100, minLength: 0 }}
            />
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={handleOnClickPost}
              disabled={postText === ''}
            >
              登録
            </Button>
          </div>
          <div>
            <h3>検索された書籍は？</h3>
            TODO ここに検索結果を表示する
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTextContent;