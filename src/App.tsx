import { Box, Button, Heading } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";

function App() {
  const [isPushed, setIsPushed] = useState(false);
  const handleClick = () => {
    setIsPushed(!isPushed);
  };

  return (
    <>
      {!isPushed ? (
        <>
          <Box
            w={"100%"}
            h={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Heading marginBottom={5}>Happy New Year !!!</Heading>
            <Button onClick={handleClick}>Push</Button>
          </Box>
        </>
      ) : (
        <>
          <Box w={"100vw"}>
            <Heading p={3}>Happy New Year !!!</Heading>
            <Box display={"flex"} flexDirection={"row"}>
              <Box
                w={"100%"}
                h={"80vh"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgImage="url('/mickey.png')" // 画像のURLを指定
                bgSize="cover" // 画像をコンポーネント全体にカバーさせる
                bgPosition="center" // 画像を中央に配置
                bgRepeat="no-repeat" // 画像の繰り返しを無効にする
                color="black" // テキストの色を白に設定>
              />
            </Box>
            <Button onClick={handleClick} marginTop={3}>
              Push
            </Button>
          </Box>
        </>
      )}
    </>
  );
}

export default App;
