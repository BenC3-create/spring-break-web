
import React, { useEffect } from 'react';

const Flights = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tp.media/content?currency=usd&trs=407992&shmarker=623552&target_host=www.aviasales.com%2Fsearch&locale=en&limit=6&powered_by=true&primary=%230085FF&promo_id=4044&campaign_id=100";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Flight Deals</h2>
      <div id="tp_widget_placeholder"></div>
    </div>
  );
};

export default Flights;
