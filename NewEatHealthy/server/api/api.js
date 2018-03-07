var db = require('../accessDB')
//   , util = require('util');

// GET
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





