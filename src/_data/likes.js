const axios = require('axios');
const parser = require('xml2json');

module.exports = async () => {
  const url = 'https://feedbin.com/starred/52c7a278a65ed3692940285f229f4dd5.xml';

  try {
    const {data} = await axios.get(url);
    const parsed = parser.toJson(data, {object: true});
    const items = parsed.rss.channel.item;
    let response = [];

    // Grab the items and smoosh them into something the front-end will like
    if (items.length) {
      response = items
        .map(item => ({
          title: item.title,
          url: item.link,
          publication: item['dc:creator']
        }))
        .reverse();
    }

    return response;
  } catch (ex) {
    console.log(ex);
    return [];
  }
};
