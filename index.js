exports.calcAperture = async (req, res) => {
 try {
   var t = parseFloat(req.body.t);
   var l = parseFloat(req.body.l);
   var iso = parseFloat(req.body.iso);
   var n = Math.sqrt( (((l*iso)/12.5)*t)  )/5;
   var aperture = n.toFixed(1);
   res.status(200).send(aperture);
 } catch (error) {
   //return an error
   res.status(500).send(error);
 }
};

