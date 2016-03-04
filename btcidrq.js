var chart = new cryptowatch.Embed('quoine', 'btcidr', {
	timePeriod: '1d',
  width: 100%,
  customColorScheme: {
    bg:           "000000",
    text:         "b2b2b2",
    textStrong:   "e5e5e5",
    textWeak:     "7f7f7f",
    short:        "FD4600",
    shortFill:    "FF672C",
    long:         "6290FF",
    longFill:     "002782",
    cta:          "363D52",
    ctaHighlight: "414A67",
    alert:        "FFD506",
	}
});
chart.mount('#chart-container');
