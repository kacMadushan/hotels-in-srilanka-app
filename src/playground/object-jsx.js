const user = {
    name: 'Max Bob',
    age: 26,
    locations: 'New Yourk'
}

function getLocations(locations) {
    if(locations) {
        return <p>Location: {locations}</p>
    }
}

const templateTwo = (
    <div>
        <h2>{user.name ? user.name : 'Annomuse'}</h2>
        {(user.age && user.age) >= 18 &&  <p>Age: {user.age}</p>}
        {getLocations(user.locations)}
    </div>
);