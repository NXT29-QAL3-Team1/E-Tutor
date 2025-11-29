import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

export default function Error() {
    const navigate = useNavigate();
    return (
        <div
            style={{
                padding: "60px",
                height: "100vh",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "30px",
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: "30px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div className="col-md-6 text-md-start text-center my-auto">
                        <h1 className="error-title">Error 404</h1>
                        <h2 className="fw-bold">Oops! page not found</h2>
                        <p className="text-muted">
                            Something went wrong. It looks like your requested page could not be found.
                            It seems like the link is broken or the page is removed.
                        </p>
                        <button
                            style={{
                                backgroundColor: "#FE7134",
                                border: "none",
                                outline: "none",
                                padding: "10px 20px",
                                color: "white",
                                borderRadius: "10px",
                            }}
                            onClick={() => {
                                navigate("/");
                            }}
                        >Go Home
                        </button>
                    </div>

                    <div className="col-md-6 text-center">
                        <img src="../../../../public/imgs/error.png" alt="404 illustration" className="img-fluid" />
                    </div>
                </Box>
            </div>

            <footer className="text-center small text-muted py-3">
                © 2021 - Eduguard. Designed by <span className="fw-bold">Templatescookie</span>. All rights reserved.
                <br /> FAQs | Privacy Policy | Terms & Condition
            </footer>
        </div>
    )
}
