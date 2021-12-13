import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Paper,
        Table,
        TableBody,
        TableCell,
        TableContainer,
        TableHead,
        TableRow, 
        Button, 
        Box, 
        Typography } from "@mui/material";
import { Graphviz } from "graphviz-react";

import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const GetTextContent = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const text = useSelector((state) => state.text);

  const handleOnClickDelete = async () => {
    const textUrl = `https://indextify.herokuapp.com/text/${text.id}`;
    const response = await axios.delete(textUrl);
    if (response.status === 200)
      alert(`正常に文字列${text.id}を削除しました。`);
    else alert(`文字列${text.id}の削除に失敗しました。`);
    dispatch({
      type: "GET_TEXT",
      payload: null,
    });

    const textsUrl = `https://indextify.herokuapp.com/texts/`;
    const textsResponse = await axios.get(textsUrl);
    console.log(textsResponse.data);
    dispatch({
      type: "GET_TEXTS",
      payload: textsResponse.data,
    });
  };

  const rows = (text !== null) &&
    {"sa":text.sa,"bwt":text.bwt.split(""),"lf":text.lf,"psi":text.psi,"lcp":text.lcp};

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <div className="getBox" style={{ width: "100%" }}>
        <div>
          {text ? (
            <div>
              <Typography>文字列 {text.text}</Typography>
              <Typography>
                ID:{text.id} 長さ:{text.text.length} 送信日時:{text.date}
              </Typography>
              <Box
                component="div"
                sx={{ border: "1px solid black", marginBottom: "10px" }}
              >
                <Graphviz
                  dot={text.dot}
                  options={{
                    width: "100%",
                    height: "500px",
                    zoom: true,
                    fit: true,
                    zoomScaleExtent: [0.1, 10],
                  }}
                />
              </Box>
              <TableContainer component={Paper}>
                  <Table aria-label="text index table" size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>i</TableCell>
                        {[...Array(text.text.length+1)].map((_,i)=>(<TableCell align="center">{i}</TableCell>))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {["sa","bwt","lf","psi","lcp"].map((rowname)=>(
                        <TableRow>
                          <TableCell scope="row">{rowname}</TableCell>
                          {rows[rowname].map((k)=>(
                            <TableCell align="center">{k}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
              </TableContainer>
              <Button
                className={classes.button}
                variant="outlined"
                color="secondary"
                onClick={handleOnClickDelete}
              >
                選択している文字列を削除
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default GetTextContent;
