import React from 'react';

const CalendlyWidget = () => {
  return (
    <div>
      <h3>Book an Appointment with the Doctor</h3>
      {/* Embed your Calendly scheduling link */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/devendrayalamaddi/careconnect"
        style={{ minWidth: '320px', height: '630px' }}
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </div>
  );
};

export default CalendlyWidget;
