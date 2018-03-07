var db = require('../accessDB')
//   , util = require('util');

exports.categories = function (req, res) {
  console.log('*** categories');

  db.getCategories(function(err, categories) {
    if (err) {
      console.log('*** categories err');
      res.json({
        categories: categories
      });
    } else {
      console.log('*** categories ok');

      res.json(categories);
    }
  });
};

exports.clients = function (req, res) {
  console.log('*** clients');

  db.getClients(function(err, clients) {
    if (err) {
      console.log('*** clients err');
      res.json({
        clients: clients
      });
    } else {
      console.log('*** clients ok');

      res.json(clients);
    }
  });
};

exports.markers = function (req, res) {
  console.log('*** markers');

  db.getMarkers(function(err, markers) {
    if (err) {
      console.log('*** markers err');
      res.json({
        markers: markers
      });
    } else {
      console.log('*** markers ok');

      res.json(markers);
    }
  });
};

exports.addClient = function (req, res) {
  console.log('*** addClient');
  db.insertClient(req.body, function (err, client) {
    if (err) {
      console.log('*** addClient err');
      res.json(false);
    } else {
      console.log('*** addClient ok');
      res.json(client);
    };
  });
}

exports.editClient = function (req, res) {
  console.log('*** editClient');

   db.editClient(req.params.id, req.body, function (err) {
     if (err) {
       console.log('*** editClient err');
       res.json({ 'status': false });
     } else {
       console.log('*** editClient ok');

       res.json({ 'status': true });
     }
   });
 };

exports.deleteClient = function (req, res) {
  console.log('*** deleteClient');
  db.deleteClient(req.params.id, function(err) {
    if (err) {
      console.log('*** deleteClient err');
      res.json({'status': false});
    } else {
      console.log('*** deleteClient ok');
      res.json({'status': true});
    }
  });
}

exports.searchClients = function (req, res) {
  console.log('*** searchClients');
  db.searchClients(req.params, function (err, docs) {
    if (err) {
      console.log('*** searchClients err');
      res.json(false);
    } else {
      console.log('*** searchClients ok');
      res.json(docs);
    };
  });
}

exports.addMarker = function (req, res) {
  console.log('*** addMarker');
  db.insertMarker(req.body, function (err) {
    if (err) {
      console.log('*** addMarker err');
      res.json(false);
    } else {
      console.log('*** addMarker ok');
      res.json(req.body);
    };
  });
}

exports.editMarker = function (req, res) {
  console.log('*** editMarker');

   db.editMarker(req.params.id, req.body, function (err) {
     if (err) {
       console.log('*** editMarker err' + util.inspect(err));
       res.json({ 'status': false });
     } else {
       console.log('*** editMarker ok');

       res.json({ 'status': true });
     }
   });
 };

 exports.deleteMarker = function (req, res) {
  console.log('*** deleteMarker');

  db.deleteMarker(req.params.id, function(err) {
    if (err) {
      console.log('*** deleteMarker err');
      res.json({'status': false});
    } else {
      console.log('*** deleteMarker ok');
      res.json({'status': true});
    }
  });
};

exports.addCategory = function (req, res) {
  console.log('*** addCategory');
  db.insertCategory(req.body, function (err) {
    if (err) {
      console.log('*** addCategory err');
      res.json(false);
    } else {
      console.log('*** addCategory ok');
      res.json(req.body);
    };
  });
}

 exports.editCategory = function (req, res) {
  console.log('*** editCategory');

   db.editCategory(req.params.id, req.body, function (err) {
     if (err) {
       console.log('*** editCategory err' + util.inspect(err));
       res.json({ 'status': false });
     } else {
       console.log('*** editCategory ok');

       res.json({ 'status': true });
     }
   });
 };

exports.deleteCategory = function (req, res) {
  console.log('*** deleteCategory');

  db.deleteCategory(req.params.id, function(err) {
    if (err) {
      console.log('*** deleteCategory err');
      res.json({'status': false});
    } else {
      console.log('*** deleteCategory ok');
      res.json({'status': true});
    }
  });
};

exports.posts = function (req, res) {
  console.log('*** posts');

  db.getPosts(function(err, posts) {
    if (err) {
      console.log('*** posts err');
      res.json({
        posts: posts
      });
    } else {
      console.log('*** posts ok');
      console.log('*** posts are ' + posts);

      res.json(posts);
    }
  });
};

exports.addPost = function (req, res) {
  console.log('*** addPost');
  console.log(req.body)
  db.insertPost(req.body, function (err) {
    if (err) {
      console.log('*** addPost err');
      res.json(false);
    } else {
      console.log('*** addPost ok');
      res.json(req.body);
    };
  });
}

exports.editPost = function (req, res) {
  console.log('*** editPost');

   db.editPost(req.params.id, req.body, function (err) {
     if (err) {
       console.log('*** editPost err' + util.inspect(err));
       res.json({ 'status': false });
     } else {
       console.log('*** editPost ok');

       res.json({ 'status': true });
     }
   });
 };

 exports.deletePost = function (req, res) {
  console.log('*** deletePost');

  db.deletePost(req.params.id, function(err) {
    if (err) {
      console.log('*** deletePost err');
      res.json({'status': false});
    } else {
      console.log('*** deletePost ok');
      res.json({'status': true});
    }
  });
};


// GET
exports.states = function (req, res) {
  console.log('*** states');
  db.getStates(function(err, states) {

    if (err) {
      console.log('*** states err');
      res.json({
        states: states
      });
    } else {
      console.log('*** states ok');
      res.json(states);
    }
  });
};

exports.customersSummary = function (req, res) {
  console.log('*** customersSummary');
  db.getCustomersSummary(function(err, customersSummary) {
    if (err) {
      console.log('*** customersSummary err');
      res.json({
        data: customersSummary
      });
    } else {
      console.log('*** customersSummary ok');
      res.json(customersSummary);
    }
  });
};

exports.checkemail = function (req, res) {
  console.log('*** checkemail');

  db.getCustomerEmail(req.query.value, function(err, customer) {
    if (err) {
      console.log('*** getCustomerEmail err');
      res.json({
        customer: customer
      });
    } else {
      console.log('*** getCustomerEmail ok');
      res.json({'status': (customer === undefined)});
    }
  });
};

exports.login = function (req, res) {
  console.log('*** login');

   db.login(req.body, function (err, client) {
     if (err) {
       console.log('*** login err');
       res.json({ });
     } else {
       console.log('*** login ok');

       res.json({ client : client });
     }
   });
 };




