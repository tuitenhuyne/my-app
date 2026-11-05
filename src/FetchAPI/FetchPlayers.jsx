import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from "@mui/material";

const baseURL = `https://6adff5228e42963c8d5e872a.mockapi.io/dpPlayers`;

export default function FetchPlayers() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAPIData(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Players
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)"
          }
        }}
      >
        {APIData.map((data) => {
          return (
            <Card key={data.id}>
              <CardMedia
                component="img"
                height="240"
                image={data.img}
                alt={data.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.club}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{data.nation}</Button>
                <Button size="small">Detail</Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}