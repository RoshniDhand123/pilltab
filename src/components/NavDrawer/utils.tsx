const getThemeByRole = (role: string): string => {
    switch (role) {
        case "Nurse":
            return "green;";
        case "Physician":
            return "blue";
        case "Pharmacist":
            return "linear-gradient(229.34deg,#fd5d93 8.35%,#ec250d 87.43%);";
        default:
            return "linear-gradient(360deg, #BA54F5 0%, #E14ECA 100%);";
    }
}

export {
    getThemeByRole
}