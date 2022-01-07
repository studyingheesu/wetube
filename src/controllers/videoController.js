export const trending = (req, res) =>
  res.render('home', {
    pageTitle: 'Home',
  });
export const see = (req, res) =>
  res.render('watch', {
    pageTitle: 'Watch',
  });
export const edit = (req, res) =>
  res.render('edit', {
    pageTitle: 'Edit',
  });
export const upload = (req, res) => res.send('Edit');
export const remove = (req, res) => res.send('Edit');
