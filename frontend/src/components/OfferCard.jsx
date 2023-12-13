import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

export default function OfferCard(props) {
  const { payload } = props.offer.details.content;

  return (
    <div className="box">
      {payload.imagemURL
        ? (
          <img className="imagem" src={payload.imagemURL} alt="Descrição da imagem" />
        ) : (
          <>
            <p className="offer-title">{payload.titulo}</p>
            <p>{payload.subtitulo}</p>
            <p>{payload.botao}</p>
          </>
        )}
    </div>
  );
}

OfferCard.propTypes = {
  offer: PropTypes.object,
}.isRequired;
