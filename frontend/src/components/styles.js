import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    display: "flex",
  },
  apps: {
    width: "100%",
    maxWidth: "480px",
    height: "88vh",
    margin: "0 auto",
    backgroundColor: theme.palette.common.white,
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.05)",
    position: "relative",
  },
  appHeader: {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    justifyContent: "space-between",
    backgroundColor: theme.palette.grey[300],
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
  },
  appHeaderText: {
    fontSize: "30px",
    color: theme.palette.text.primary,
    fontWeight: 800,
    textAlign: "center",
  },
  appHeaderButton: {
    border: 0,
    background: "transparent",
    cursor: "pointer",
  },
  appHeaderButtonSvg: {
    fill: theme.palette.text.primary,
    height: "25px",
    width: "25px",
    objectFit: "cover",
  },
  appBody: {
    padding: "16px",
  },
  notesHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 16px",
  },
  notesTitle: {
    color: theme.palette.primary.main,
    fontSize: "24px",
    fontWeight: 600,
  },
  notesCount: {
    color: theme.palette.grey[600],
    fontSize: "18px",
  },
  notesList: {
    padding: 0,
    margin: "16px 0",
    height: "70vh",
    overflowY: "auto",
    scrollbarWidth: "none" /* Firefox */,
  },
  notesListItem: {
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    marginBottom: "12px",
    padding: "8px 16px",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.background.default,
      cursor: "pointer",
    },
  },
  notesListHeading: {
    fontWeight: 600,
  },
  notesListSpan: {
    color: theme.palette.grey[600],
    display: "inline-block",
    marginRight: "8px",
  },
  notesListText: {
    fontSize: "14px",
    color: theme.palette.text.secondary,
  },
  floatingButton: {
    fontSize: "48px",
    position: "absolute",
    bottom: "24px",
    right: "16px",
    background: theme.palette.primary.main,
    border: "none",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.2)",
  },
  floatingButtonSvg: {
    fill: theme.palette.background.default,
  },
}));

export default useStyles;
