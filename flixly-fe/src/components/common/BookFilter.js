import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  Autocomplete,
  Paper,
} from "@mui/material";

const BookFilter = ({ open, handleDialog, selectedBookHandler, data }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Dialog
        open={open}
        onClose={() => handleDialog(false)}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const selectedBook = formJson.book;
              handleDialog(false);
            },
            sx: {
              backgroundColor: "var(--color-background)",
              color: "#7d7d7d", // Yumuşak orta koyulukta gri
              padding: 2,
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #444",
            backgroundColor: "var(--color-background)",
            color: "#a1883e", // Soft hardal-rengi
            fontWeight: "bold",
          }}
        >
          Add to your books
          <Button
            onClick={() => handleDialog(false)}
            sx={{
              minWidth: "auto",
              color: "#a1883e",
              fontSize: "1.2rem",
              "&:hover": { backgroundColor: "rgba(161,136,62,0.15)" },
            }}
          >
            ✖
          </Button>
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "var(--color-background)",
            color: "#7d7d7d",
            pt: 2,
            pb: 3,
          }}
        >
          <Autocomplete
            options={data}
            getOptionLabel={(option) => option.title}
            filterOptions={(options, state) =>
              options.filter((option) =>
                option.title
                  .toLowerCase()
                  .includes(state.inputValue.toLowerCase())
              )
            }
            onChange={(event, newValue) => {
              setSearchValue(newValue ? newValue.title : "");
              selectedBookHandler(newValue);
            }}
            PaperComponent={(props) => (
              <Paper
                {...props}
                style={{
                  backgroundColor: "#var(--color-background)", // koyu arka plan
                  color: "#7d7d7d",
                }}
                elevation={4}
              />
            )}
            ListboxProps={{
              style: {
                backgroundColor: "var(--color-background)",
                color: "#7d7d7d",
                maxHeight: 200,
                overflowY: "auto",
              },
              sx: {
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#555",
                  borderRadius: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#2a2f36",
                },
              },
            }}
            renderOption={(props, option, { selected }) => (
              <li
                {...props}
                style={{
                  backgroundColor: selected ? "#3b4552" : "var(--color-background)",
                  color: "#7d7d7d",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#3b4552")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = selected
                    ? "#3b4552"
                    : "var(--color-background)")
                }
              >
                {option.title}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                autoFocus
                required
                margin="dense"
                name="book"
                type="text"
                variant="standard"
                sx={{
                  input: {
                    color: "#7d7d7d",
                    backgroundColor: "var(--color-background)",
                    borderRadius: 1,
                    padding: "6px 8px",
                  },
                  label: { color: "#a1883e" },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#a1883e",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "#a1883e",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#a1883e",
                  },
                }}
              />
            )}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
export default BookFilter;
