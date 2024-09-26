import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";

export default function ProfileCard() {
  const userData = localStorage.getItem("user");
  if (userData) {
    const user = JSON.parse(userData);
    const navigate = useNavigate();
    // const user = JSON.parse(localStorage.getItem('user')!);
    // console.log(user.name);
    const Logout = () => {
      localStorage.clear();
      navigate("/login");
    };
    return (
        <div className={`animate-slide-right`}>
        <Card
          sx={{
            maxWidth: 345,
            margin: "16px",
            height: "80vh",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: "auto",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="pb-12">
            <div className="flex justify-center mt-12">
              <Avatar title="Profile" sx={{ width: 96, height: 96 }} />
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
}
