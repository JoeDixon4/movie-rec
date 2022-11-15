import '../index.css';

function Recommend(){
    return(
    <div>
        <h1>We Can Recommend a movie to You!</h1>
        <Category/>
    </div>);
}

function Category(){
    return(
        
        <div id="parent">
            <div id="child">
                <label for="category">Choose a Category:</label>
                <select name="category" id="category">
                    <option value="Action">Action</option>
                    <option value="Animation">Animation</option>
                    <option value="Children">Children</option>
                    <option value="Classics">Classics</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Drama">Drama</option>
                    <option value="Family">Family</option>
                    <option value="Foreign">Foreign</option>
                    <option value="Games">Games</option>
                    <option value="Horror">Horror</option>
                    <option value="Music">Music</option>
                    <option value="New">New</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Sports">Sports</option>
                    <option value="Travel">Travel</option>
                </select>
            </div>
            <div id="child">
                <label for="category">Choose a Rating:</label>
                <select name="category" id="category">
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="NC-17">NC-17</option>
                    <option value="PG-13">PG-13</option>
                    <option value="R">R</option>
                </select>
            </div>
        </div>
    );
    }

export default Recommend;