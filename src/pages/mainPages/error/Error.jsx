import ErrorImg from "../../../../public/imgs/error.png";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

// اسم المكون: Error
const Error = () => {
    const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 5, md: 10 },
          width: "100%",
          maxWidth: 1200, // عرض أقصى لصفحة الخطأ
        }}
      >
        {/* === القسم الأيسر: النصوص والأزرار === */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            maxWidth: 500,
          }}
        >
          {/* نص "Error 404" الرمادي الفاتح */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: "grey.300",
              marginBottom: 1,
              opacity: 0.8,
            }}
          >
            Error 404
          </Typography>

          {/* نص "Oops! page not found" الأسود السميك */}
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 800,
              color: "text.primary",
              marginBottom: 2,
            }}
          >
            Oops! page not found
          </Typography>

          {/* نص الوصف */}
          <Typography
            variant="subtitle1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
              mb: 4, // هامش سفلي قبل الزر
            }}
          >
            Something went wrong. It looks like your requested page could not be
            found. It seems like the link is broken or the page is removed.
          </Typography>

          {/* زر "Go Back" البرتقالي */}
          <Button
            variant="contained"
            onClick={handleGoBack}
            sx={{
              backgroundColor: "#FF5722", // اللون البرتقالي المطلوب
              color: "white",
              fontWeight: "bold",
              padding: "12px 30px",
              borderRadius: 1,
              "&:hover": {
                backgroundColor: "#E64A19", // لون أغمق عند التمرير
              },
            }}
          >
            Go Back
          </Button>
        </Box>

        {/* === القسم الأيمن: صورة الـ 404 والشخصية === */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            minHeight: { xs: 200, md: 350 }, // للمحافظة على مساحة
          }}
        >
         
          <Box 
                component="img"
                src={ErrorImg}
                alt="Error 404 Illustration"
                sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    position: 'relative', // لتظهر فوق نص الـ 404 إذا استخدمت نصًا
                    zIndex: 2,
                }}
            />
        </Box>
      </Box>
    </Container>
  );
};

export default Error;