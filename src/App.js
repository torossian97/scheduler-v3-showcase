/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Fab,
  Modal,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";
import { CopyBlock, CodeBlock, dracula } from "react-code-blocks";
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
  copyBlockContainerStyle,
  drawerStyle,
  activeListItemStyle,
} from "./styles";
import UseCase1 from "./pages/UseCase1";
import UseCase2 from "./pages/UseCase2";
import UseCase3 from "./pages/UseCase3";
import UseCase4 from "./pages/UseCase4";
import UseCase5 from "./pages/UseCase5";
import UseCase6 from "./pages/UseCase6";
import UseCase7 from "./pages/UseCase7";
import UseCase8 from "./pages/UseCase8";
import UseCase9 from "./pages/UseCase9";
import UseCase10 from "./pages/UseCase10";

import UseCase12 from "./pages/UseCase12";
import UseCase13 from "./pages/UseCase13";

/* eslint import/no-webpack-loader-syntax: off */
import useCase1Code from "!!raw-loader!./pages/UseCase1.js";
import useCase2Code from "!!raw-loader!./pages/UseCase2.js";
import useCase3Code from "!!raw-loader!./pages/UseCase3.js";
import useCase4Code from "!!raw-loader!./pages/UseCase4.js";
import useCase5Code from "!!raw-loader!./pages/UseCase5.js";
import useCase6Code from "!!raw-loader!./pages/UseCase6.js";
import useCase7Code from "!!raw-loader!./pages/UseCase7.js";
import useCase8Code from "!!raw-loader!./pages/UseCase8.js";
import useCase9Code from "!!raw-loader!./pages/UseCase9.js";
import useCase10Code from "!!raw-loader!./pages/UseCase10.js";

import useCase12Code from "!!raw-loader!./pages/UseCase12.js";
import useCase13Code from "!!raw-loader!./pages/UseCase13.js";

const sections = [
  {
    title:
      "This is the v3 Nylas Scheduler, a set of components designed for native scheduling experiences. The Scheduling component handles bookings...",
    menuTitle: "The Scheduling Page",
    Component: UseCase1,
    code: useCase1Code,
  },
  {
    title: "...while the Scheduler Editor allows users to manage their pages.",
    menuTitle: "The Editor",
    Component: UseCase2,
    code: useCase2Code,
  },
  {
    title: "Both can be fully styled through CSS...",
    menuTitle: "CSS Styling",
    Component: UseCase3,
    code: useCase3Code,
  },
  {
    title:
      "...or customized using composable mode, event overrides, and your own UI elements.",
    menuTitle: "Composability",
    Component: UseCase4,
    code: useCase4Code,
  },
  {
    title: "Here's the Editor with a composed selection of settings...",
    menuTitle: "Composed Editor",
    Component: UseCase5,
    code: useCase5Code,
  },
  {
    title:
      "...and here's the Scheduling page with a custom booking form. Collect any information you want from invitees...",
    menuTitle: "Invitation Example",
    Component: UseCase6,
    code: useCase6Code,
  },
  {
    title:
      "...and it will appear in both the Scheduler confirmation emails, as well as booking objects for historical purposes.",
    menuTitle: "Emails",
    Component: UseCase7,
    code: useCase7Code,
  },
  {
    title: "Additional form fields can also be added through the editor.", //, along with other communication options for Organizers.",
    menuTitle: "Communication Settings",
    Component: UseCase8,
    code: useCase8Code,
  },
  {
    title:
      "Now let's dive into multi-participant settings, which allow you to leverage Collective availability for your page...",
    menuTitle: "Collective Meetings",
    Component: UseCase9,
    code: useCase9Code,
  },
  {
    title:
      "...as well as Round-Robin, with booking calendars added per-participant when serving a Round-Robin configuration.",
    menuTitle: "Round-Robin Settings",
    Component: UseCase10,
    code: useCase10Code,
  },
  {
    title:
      "Now let's put it all together to build things like this hyper-focused, minimal Scheduler manager.",
    menuTitle: "Minimalist Editor Exmaple",
    Component: UseCase12,
    code: useCase12Code,
  },
  // {
  //   title: "Or, this on-the-fly collective Scheduling link generator.",
  //   menuTitle: "Quick Collective Example",
  //   Component: UseCase13,
  //   code: useCase13Code,
  // },
];

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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

  const hideArrow = isDrawerOpen ? { display: "none" } : {};

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
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

  const handleListItemClick = (index) => {
    setCurrentSection(index);
    setIsDrawerOpen(false);
  };

  return (
    <div css={rootStyle}>
      <CssBaseline />
      <AppBar position="fixed" css={appBarStyle}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap></Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
          BackdropProps: { invisible: true },
        }}
      >
        <List css={drawerStyle}>
          {sections.map((section, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleListItemClick(index)}
              css={currentSection === index ? activeListItemStyle : null}
            >
              <ListItemText
                primary={`${String(index + 1).padStart(2, "0")}. ${
                  section.menuTitle || `Section ${index + 1}`
                }`}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
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
            style={hideArrow}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            disabled={currentSection === sections.length - 1}
            css={navButtonStyle}
            style={hideArrow}
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
            <div css={copyBlockContainerStyle}>
              <CodeBlock
                language={"jsx"}
                text={sections[currentSection].code}
                showLineNumbers={true}
                theme={dracula}
              />
            </div>
          </Box>
        </Modal>
      </main>
    </div>
  );
}

export default App;
