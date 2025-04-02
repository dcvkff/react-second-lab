import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Avatar, Input } from "@mui/material";
import { Box } from "@mui/system";

const ProfileCard = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 360,
        boxShadow: 4,
        borderRadius: 3,
        mx: "auto",
        mt: 5,
        p: 3,
      }}
    >
      <Box display="flex" justifyContent="center" mb={2}>
        <Avatar
          sx={{
            width: 120,
            height: 120,
            border: "4px solid #3f51b5",
          }}
          src={image || "/avatar.jpg"}
          alt="Profile Picture"
        />
      </Box>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold", color: "#3f51b5", textAlign: "center" }}>
          Олександр
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2, textAlign: "center" }}>
          Привіт! Я Олександр, і я обожнюю подорожувати, читати книги та вивчати нові технології.
        </Typography>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            color="primary"
            component="label"
            sx={{
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "20px",
              backgroundColor: "#3f51b5",
            }}
          >
            Завантажити фото
            <Input type="file" hidden onChange={handleImageChange} sx={{ display: "none" }} />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;