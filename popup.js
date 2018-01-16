$(document).ready(() => {
    const searchBtn = $('.is-link');
    searchBtn.click(search);

    function search() {
        const dataURI = 'http://burst.btfg.space/pool-payments.json';
        $.get(dataURI, (data) => {
            console.log(data);
            const accountID = $('.accountID').val();
            const pendingPayment = data.pendingPaymentList[accountID] || 0;
            const sentPaymentObj = data.sentPaymentList.find(payment => payment.accountId === accountID);
            const sentPayment = sentPaymentObj.amount || 0;
            const contentDiv = $('.content');
            contentDiv.html(`
                <span>Pending Payment: ${pendingPayment}</span><br/>
                <span>Sent Payment: ${sentPayment}</span>
            `);
        });
    }
});