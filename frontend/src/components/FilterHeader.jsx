// MUI
import {
    Box,
    Stack,
    Button,
    Typography,
    Chip,
    Divider,
    MenuItem,
    Select,
    useTheme,
} from "@mui/material";
import { FilterList } from "@mui/icons-material";

/* ----- Variables ----- */
const FILTER_COUNT = 3;
const QUERY = "ui/ux design";
const RESULTS_COUNT = 3145684;

const SORT_OPTIONS = ["Trending", "Newest", "Popular"];
const SUGGESTION_TAGS = [
    "user interface",
    "user experience",
    "web design",
    "interface",
    "app",
];
/* --------------------- */

export default function FilterHeader() {
    const theme = useTheme();
    const formattedCount = RESULTS_COUNT.toLocaleString();

    return (
        <Box sx={{ width: "100%", p: { xs: 2, sm: 3 }, bgcolor: "#fff" }}>
            {/* Top Section: Filter + Sort */}
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                gap={2}
            >
                {/* Filter Button */}
                <Button
                    variant="outlined"

                    startIcon={<FilterList />}
                    sx={{
                        textTransform: "none",
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        "&:hover": {
                            borderColor: theme.palette.primary.main,
                            bgcolor: theme.palette.primary.light,
                        },
                        pointerEvents: "none",
                    }}
                >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                        <span>Filter</span>
                        <Box
                            component="span"
                            sx={{
                                px: 1,
                                py: "2px",
                                borderRadius: 1,
                                bgcolor: theme.palette.primary.light,
                                color: theme.palette.primary.main,
                                fontWeight: 700,
                                fontSize: "0.9rem",
                            }}
                        >
                            {FILTER_COUNT}
                        </Box>
                    </span>
                </Button>

                {/* Sort Dropdown */}
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" color="text.secondary">
                        Sort by:
                    </Typography>
                    <Select
                        defaultValue={SORT_OPTIONS[0]}
                        size="small"
                        sx={{
                            minWidth: 130,
                            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                        }}
                    >
                        {SORT_OPTIONS.map((opt) => (
                            <MenuItem key={opt} value={opt}>
                                {opt}
                            </MenuItem>
                        ))}
                    </Select>
                </Stack>
            </Stack>

            {/* Divider */}
            <Divider sx={{ my: 2 }} />

            {/* Bottom Section: Suggestions + Results */}
            <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "center", sm: "flex-end" }}
                justifyContent="space-between"
                spacing={2}
            >
                {/* Suggestions */}
                <Box sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column", gap: "10px" }}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mr: 1, whiteSpace: "nowrap" }}
                    >
                        Suggestion:
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "6px",
                        }}
                    >
                        {SUGGESTION_TAGS.map((tag) => (
                            <Chip
                                key={tag}
                                label={tag}
                                size="small"
                                sx={{
                                    bgcolor: theme.palette.primary.light,
                                    color: theme.palette.primary.main,
                                    fontSize: "0.8rem",
                                    textTransform: "capitalize",
                                    height: "26px",
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                {/* Results */}
                <Box sx={{ mt: { xs: 1, sm: 0 }, whiteSpace: "nowrap" }}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: "0.9rem" }}
                    >
                        <strong>{formattedCount}</strong> results found for{" "}
                        <Box component="span" sx={{ fontStyle: "italic" }}>
                            "{QUERY}"
                        </Box>
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}
