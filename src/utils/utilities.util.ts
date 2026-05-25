

export const dateFormatter = (date : string) => {
    if(!date) return "";
    const rawDate = new Date(date);
    
    return rawDate.toLocaleDateString("en-PH", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}