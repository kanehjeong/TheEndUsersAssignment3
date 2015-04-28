function select(id) {


    if (id == 'hamburger') {
        document.getElementById('tables').style.display = 'block';
        document.getElementById('graph').style.display = 'none';
    }
    else if (id == 'graph') {
        document.getElementById('tables').style.display = 'none';
        document.getElementById('graph').style.display = 'block';
    }

}