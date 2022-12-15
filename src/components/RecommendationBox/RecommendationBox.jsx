import * as React from 'react';
import './RecommendationBox.scss';
import Button from '../../Ui/Button/Button';

import cx from 'classnames';

export default function RecommendationBox({ data}) {
  const {
    title,  description,
  } = data;

  return (
    <div className={cx("recommendation-box")}>
      <div className="recommendation-box__text-container">
        <div className="recommendation-box__title">
          {title}
        </div>
        <div className="recommendation-box__description">
          { description }
        </div>
        <Button style={{ marginTop: '40px' }}>Sold out</Button>
      </div>


    </div>
  );
}
