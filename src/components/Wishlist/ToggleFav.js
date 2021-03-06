import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import { ReactComponent as Heart } from '../../assets/heart.svg';

const ToggleFav = props => {

    const { IDS, favMovie } = props;
    let title;

    if (IDS && IDS.includes(favMovie.id)){
        title = 'Remove From Wishlist';
    }
    else{
        title = 'Add to Wishlist';
    }

    const favoriteClickHandler = (e, movie) => {
        if (IDS && props.IDS.includes(movie.id)) {
            props.removeFav(movie.id);
        }
        else {
            props.addFav(movie);
        }
        e.stopPropagation();
    };

    return (
        <div data-aos='fade-up'
            data-aos-duration="500"
            className={`toggleFav ${props.class}`}
            title = {title}
        >
            <Heart 
                className={`toggleFav__icon ${IDS && IDS.includes(favMovie.id) ? 'toggleFav__icon--active' : '' }`} 
                onClick={(e) => favoriteClickHandler(e, favMovie)} 
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        IDS: state.wishlist.wishlistID
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addFav: (movie) => dispatch(actions.addFavorite(movie)),
        removeFav: (ID) => dispatch(actions.removeFavorite(ID))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleFav);
