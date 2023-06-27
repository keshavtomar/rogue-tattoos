import React from 'react';
import '../styles/glasscard.css';

const Card = () => {
    return (
        <div class="card">
            <div class="card1">
                <p>Get connected to a professional</p>
                <div class='card-buttons'>
                    <button type="button" class="btn btn-warning">Call</button>
                    <button type="button" class="btn btn-warning">Whatsapp</button>
                </div>
                <div class="go-corner" href="#">
                    <div class="go-arrow">
                        →
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Card;