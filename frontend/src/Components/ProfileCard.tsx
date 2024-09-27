import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { FiCamera } from "react-icons/fi";

interface User {
  name: string;
  email: string;
}

const ProfileCard: React.FC = () => {
  const userData = localStorage.getItem("user");
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  if (userData) {
    const user: User = JSON.parse(userData);

    const Logout = () => {
      localStorage.clear();
      navigate("/login");
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
        if (file) {
 
        }
      
     
    };

 

    return (
      <div className="animate-slide-right">
        <Card
          sx={{
            maxWidth: 345,
            margin: "16px",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "auto",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="pb-12">
            <div className="flex justify-center mt-12">
              <Avatar
                src={profilePicture  || undefined}
                title="Profile"
                sx={{ width: 96, height: 96 }}
              >
                <IconButton aria-label="upload" component="label">
                  <FiCamera />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    hidden
                  />
                </IconButton>
              </Avatar>
            </div>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {user.email}
              </Typography>
            </CardContent>
          </div>
          
          <div className="mx-3 mt-auto mb-5">
            <NavLink onClick={Logout} to="/login">
              <Button variant="outlined" fullWidth>
                Log Out
              </Button>
            </NavLink>
          </div>
        </Card>
      </div>
    );
  }

  return null; // Handle case where userData is not present
};

export default ProfileCard;
