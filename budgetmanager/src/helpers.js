export const checkBudget = (budget, result) => {

    let clase;

    if ( (budget / 4) > result){
        clase = 'alert alert-danger'
    } else if ( (budget/2) > result)
        clase = 'alert alert-warning'
    else
        clase = 'alert alert-success'

    return clase;

}