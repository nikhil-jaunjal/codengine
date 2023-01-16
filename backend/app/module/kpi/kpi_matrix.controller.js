const db = require('../../model');
const KPI = db.kpi;

exports.getAllKpiMatrix = (req, res) => {
    KPI.findAll()
        .then((data) =>{
            res.send(200).send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || 'unable to get kpi'
            });
        });
};

exports.getKpiMatrix = (req, res) => {
    const id = req.params.id;
    KPI.findByPk(id)
    .then((data) =>{
        res.send(200).send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'unable to get kpi with id' + id
        });
    });
    
};

exports.saveKpiMatrix = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: 'Missing body attributes'
        });
        return;
    }
    const kpi = {
        name: req.body.name,
        decription: req.body.decription,
        departmentId: req.body.departmentId,
        hasSelfReview: req.body.hasSelfReview
    }
    KPI.create(kpi)
    .then((data)=>{
        res.send(data)
    }).catch(err =>{
        res.status(500).send({
            message: err.message || 'unable to create kpi'
        });
    });
};

exports.updateKpiMatrix = (req, res) => {
    const id = req.params.id;
    KPI.update(req.body, {where: {id: id}})
        .then(data =>{
            if(data === 1){
                res.send(200).send({
                    message: 'kpi updated successfully'
                });
            }else{
                res.status(500).send({
                    message: err.message || 'unable t update kpi with id' + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'unable t update kpi with id' + id
            });
        });
};

exports.deleteKpiMatrix = (req, res) => {
    const id = req.params.id;
    KPI.destory({where: {id: id}})
    .then(data =>{
        if(data === 1){
            res.send(200).send({
                message: 'kpi deleted successfully'
            });
        }else{
            res.send(500).send({
                message: 'unable to delete kpi with id '+ id
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'unable to delete kpi with id' + id
        });
    });
};