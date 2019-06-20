// Get Visible Hotels

export default (hotels, { text, location }) => {
    return hotels.filter((hotel) => {
        const textMatch = hotel.name.toLowerCase().includes(text.toLowerCase());
        const locationMatch = location ? hotel.location.toLowerCase().includes(location.toLowerCase()) : true
        return textMatch && locationMatch
    });
};