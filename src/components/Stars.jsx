import "../styles/review.css";

export default function Stars(props) {
    const f = props.filled;
    const r = 5 - f;
    const filledStars = (iterations) => {
        const stars = [];
        for (let i = 0; i < iterations; i++) {
            stars.push(<span>⭐</span>);
        }
        return stars;
    };
    const emptyStars = (iterations) => {
        const stars = [];
        for (let i = 0; i < iterations; i++) {
            stars.push(<span>☆</span>);
        }
        return stars;
    };

    return (
        <div className="stars">
            <p>
                {filledStars(f)}
                {emptyStars(r)}
            </p>
        </div>
    );
}
