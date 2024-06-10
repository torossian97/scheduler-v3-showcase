/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Fab,
  Modal,
  Box,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CodeIcon from "@mui/icons-material/Code";
import { CopyBlock, dracula } from "react-code-blocks";
import UseCase1 from "./pages/UseCase1";
import UseCase2 from "./pages/UseCase2";
import UseCase3 from "./pages/UseCase3";
import UseCase4 from "./pages/UseCase4";
import {
  rootStyle,
  appBarStyle,
  mainStyle,
  scrollContainerStyle,
  navArrowsStyle,
  navButtonStyle,
  dotContainerStyle,
  dotStyle,
  activeDotStyle,
  sectionTitleStyle,
  sectionContentStyle,
  fabStyle,
  modalStyle,
} from "./styles";

const sections = [
  {
    title:
      "This is the v3 Nylas Scheduler, a set of components designed for native scheduling experiences. The Scheduling component handles bookings...",
    description: "",
    Component: UseCase1,
    code: `<Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1">Description for Use Case 1</Typography>
    </Box>`,
  },
  {
    title: "...while the Scheduler Editor allows users to manage their pages.",
    description: "",
    Component: UseCase2,
    code: `<Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1">Description for Use Case 2</Typography>
    </Box>`,
  },
  {
    title: "Both can be fully styled through CSS...",
    description: "",
    Component: UseCase3,
    code: `<Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1">Description for Use Case 3</Typography>
    </Box>`,
  },
  {
    title: "...or customized using composable mode and event overrides.",
    description: "",
    Component: UseCase4,
    code: `<Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1">Description for Use Case 4</Typography>
    </Box>`,
  },
];

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const scrollToSection = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          left: currentSection * window.innerWidth,
          behavior: "smooth",
        });
      }
    };
    scrollToSection();
  }, [currentSection]);

  return (
    <div css={rootStyle}>
      <CssBaseline />
      <AppBar position="fixed" css={appBarStyle}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            X
          </Typography>
        </Toolbar>
      </AppBar>
      <main css={mainStyle}>
        <div ref={scrollContainerRef} css={scrollContainerStyle}>
          {sections.map((section, index) => {
            const { Component, title } = section;
            return (
              <div key={index} css={sectionContentStyle}>
                <Typography variant="h5" css={sectionTitleStyle}>
                  {title}
                </Typography>
                <Component />
              </div>
            );
          })}
        </div>
        <div css={navArrowsStyle}>
          <IconButton
            onClick={handlePrev}
            disabled={currentSection === 0}
            css={navButtonStyle}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            disabled={currentSection === sections.length - 1}
            css={navButtonStyle}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <div css={dotContainerStyle}>
          {sections.map((_, index) => (
            <div
              key={index}
              css={[dotStyle, currentSection === index && activeDotStyle]}
              onClick={() => setCurrentSection(index)}
            />
          ))}
        </div>
        <Fab
          color="primary"
          aria-label="code"
          css={fabStyle}
          onClick={toggleModal}
        >
          <CodeIcon />
        </Fab>
        <Modal
          open={isModalOpen}
          onClose={toggleModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box css={modalStyle}>
            <Typography id="modal-title" variant="h6" component="h2">
              Code Example
            </Typography>
            <CopyBlock
              language={"jsx"}
              text={sections[currentSection].code}
              showLineNumbers={true}
              theme={dracula}
              wrapLines={true}
              codeBock
            />
          </Box>
        </Modal>
      </main>
    </div>
  );
}

export default App;
