import { Stack } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";

function App() {
  return (
    <Stack
      maxW="1440px"
      w="100%"
      margin="auto"
      bg="#f9f9f9"
      marginY={4}
      spacing={0}
    >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </Stack>
  );
}

export default App;
