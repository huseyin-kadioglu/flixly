import {
  Box,
  Button,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import { useEffect, useState } from "react";
import { createBookContribution, getAuthors } from "../../service/APIService";

const BookContributeForm = () => {
  const [title, setTitle] = useState("");
  const [originalTitle, setOriginalTitle] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [description, setDescription] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [publisher, setPublisher] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const data = await getAuthors();
      setAuthors(data);
    } catch {
      console.error("Yazarlar yüklenirken hata oluştu.");
    }
  };

  const clearForm = () => {
    setTitle("");
    setOriginalTitle("");
    setAuthorId("");
    setPublicationYear("");
    setDescription("");
    setPageCount("");
    setPublisher("");
    setCoverUrl("");
  };

  const handleSubmit = () => {
    if (!title || !authorId) {
      alert("Lütfen zorunlu alanları doldurun.");
      return;
    }

    const payload = {
      title,
      originalTitle,
      authorId,
      publicationYear,
      description,
      pageCount,
      publisher,
      coverUrl,
    };

    createBookContribution(payload);
    clearForm();
  };

  return (
    <Box
      sx={{
        maxWidth: 480,
        mx: "auto",
        my: 5,
        p: 3,
        backgroundColor: "var(--color-background-secondary)", // iç diyalog arkaplan
        borderRadius: 2,
        fontFamily: "'Graphik-Light-Web', sans-serif",
        boxShadow: "0 0 12px rgba(0, 0, 0, 0.6)",
      }}
    >
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{ color: "var(--color-primary-button)", mb: 3, fontWeight: 700 }}
      >
        Yeni Kitap Ekle
      </Typography>

      <Autocomplete
        options={authors}
        getOptionLabel={(option) => option.name || ""}
        onChange={(event, newValue) => setAuthorId(newValue ? newValue.id : "")}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Yazar *"
            margin="normal"
            size="small"
            variant="filled"
            InputProps={{
              ...params.InputProps,
              sx: {
                backgroundColor: "var(--color-background)", // inputun kendi arkaplanı
                color: "var(--color-secondary-text)", // input içinde yazan yazının rengi
                borderRadius: 1,
              },
            }}
            InputLabelProps={{ sx: { color: "var(--color-secondary-text)", fontWeight: 500 } }}
          />
        )}
        sx={{ mt: 1 }}
      />

      <TextField
        label="Kitap İsmi *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        size="small"
        margin="normal"
        variant="filled"
        InputProps={{
          sx: {
            backgroundColor: "var(--color-background)",
            color: "var(--color-secondary-text)",
            borderRadius: 1,
          },
        }}
        InputLabelProps={{
          sx: {
            color: "#aaa",
            fontWeight: 500,
          },
        }}
      />

      <TextField
        label="Orijinal Başlık"
        value={originalTitle}
        onChange={(e) => setOriginalTitle(e.target.value)}
        fullWidth
        size="small"
        margin="normal"
        variant="filled"
        InputProps={{
          sx: {
            backgroundColor: "var(--color-background)",
            color: "var(--color-secondary-text)",
            borderRadius: 1,
          },
        }}
        InputLabelProps={{
          sx: {
            color: "#aaa",
            fontWeight: 500,
          },
        }}
      />

      <TextField
        label="Yayın Yılı"
        type="number"
        value={publicationYear}
        onChange={(e) => setPublicationYear(e.target.value)}
        fullWidth
        size="small"
        margin="normal"
        variant="filled"
        InputProps={{
          sx: {
            backgroundColor: "var(--color-background)",
            color: "var(--color-secondary-text)",
            borderRadius: 1,
          },
        }}
        InputLabelProps={{ sx: { color: "#aaa", fontWeight: 500 } }}
      />

      <TextField
        label="Sayfa Sayısı"
        type="number"
        value={pageCount}
        onChange={(e) => setPageCount(e.target.value)}
        fullWidth
        size="small"
        margin="normal"
        variant="filled"
        InputProps={{
          sx: {
            backgroundColor: "var(--color-background)",
            color: "var(--color-secondary-text)",
            borderRadius: 1,
          },
        }}
        InputLabelProps={{ sx: { color: "#aaa", fontWeight: 500 } }}
      />

      <TextField
        label="Yayıncı"
        value={publisher}
        onChange={(e) => setPublisher(e.target.value)}
        fullWidth
        size="small"
        margin="normal"
        variant="filled"
        InputProps={{
          sx: {
            backgroundColor: "var(--color-background)",
            color: "var(--color-secondary-text)",
            borderRadius: 1,
          },
        }}
        InputLabelProps={{ sx: { color: "#aaa", fontWeight: 500 } }}
      />

      <TextField
        label="Kapak Görseli URL"
        value={coverUrl}
        onChange={(e) => setCoverUrl(e.target.value)}
        fullWidth
        size="small"
        margin="normal"
        variant="filled"
        InputProps={{
          sx: {
            backgroundColor: "var(--color-background)",
            color: "var(--color-secondary-text)",
            borderRadius: 1,
          },
        }}
        InputLabelProps={{ sx: { color: "#aaa", fontWeight: 500 } }}
      />

      {coverUrl && (
        <Box mt={2} display="flex" justifyContent="center">
          <img
            src={coverUrl}
            alt="Kapak Önizleme"
            style={{
              maxWidth: "100px",
              maxHeight: "140px",
              borderRadius: "4px",
            }}
          />
        </Box>
      )}

      <TextField
        label="Açıklama"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={3}
        fullWidth
        margin="normal"
        variant="filled"
        InputProps={{
          sx: {
            backgroundColor: "var(--color-background)",
            color: "var(--color-secondary-text)",
            borderRadius: 1,
          },
        }}
        InputLabelProps={{ sx: { color: "#aaa", fontWeight: 500 } }}
      />

      <Box mt={3} display="flex" justifyContent="space-between" gap={2}>
        <Button
          onClick={clearForm}
          variant="outlined"
          sx={{
            color: "var(--color-primary-button)",
            borderColor: "var(--color-primary-button)",
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            flex: 1,
            "&:hover": {
              backgroundColor: "rgba(251, 196, 1, 0.15)",
              borderColor: "var(--color-primary-button)",
            },
          }}
        >
          Temizle
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            bgcolor: "var(--color-primary-button)",
            color: "var(--color-background)",
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 700,
            flex: 1,
            "&:hover": {
              bgcolor: "var(--color-button-hover)",
            },
          }}
        >
          Destek Ol
        </Button>
      </Box>
    </Box>
  );
};

export default BookContributeForm;
