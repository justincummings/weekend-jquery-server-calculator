
app.use(express.static('./server/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));