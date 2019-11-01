// A piece of sample front-end jquery code to trigger somart contract functions through metamask
$(document).ready( async function() {
  const ropstenGasprice = 51000000000
  window.addEventListener('load', async () => {
    let ABI = ''
    let address = ''
    $.getJSON( "config.json", async function( data ) {
      ABI = data.ABI
      address = data.address
      if (window.ethereum) {
        web3 = new Web3(window.ethereum)
        window.web3 = new Web3(ethereum)
        try {
          // Request account access if needed
          // await window.ethereum.enable()
          await ethereum.enable()
          ethereum.autoRefreshOnNetworkChange = false
        }
        catch(error) {
          console.error('enable web3 error')
        }
        
        let instance = new web3.eth.Contract(ABI, address) 
        console.log('this is instance :', instance)

        //get addr and balance 
        let account = (await web3.eth.getAccounts())[0]
        web3.eth.getBalance(account, function(error, balance) {
          if (error) {
            console.error('get balance error: ', error)
          }
          balance = web3.utils.fromWei(balance, "ether") 
          console.log('balance and addr: ', balance, addr)
          $('#addr').text(account)
          $('#balance').text(balance)
        })

        let transactionObject = {
          gasPrice: ropstenGasprice,
          gas:210000,
          from: account,
        }


        //check tokens 
        $("#register").on('click', function() {
          console.log('clicked register!')
          instance.methods.register()
            .send(transactionObject)
            .on('transactionHash', function(hash){
              console.log('hash: ', hash)
            })
            .on('receipt', function(receipt) {
              console.log('PAYABLE: this is create receipt:', receipt)
            })
            .on('confirmation', function(confirmationNumber, receipt) {
              console.log('confirmation: ', confirmationNumber, receipt)
            })
            .on('error', function(error) {
              console.error('create failed! Revert:', error)
              
            })
            .then(function() {
              alert('Done registerred!')
            })
            
        })

        //check tokens 
        $("#bid").on('click', function() {
          let arr = [0,1,2]
          let token = parseInt($("#token").val())
          let id = parseInt($("#id").val())
          if (token > 5 || !arr.includes(id)) {
            alert('Invalid input, please check your input and try again')
          }
          else {
            instance.methods.bid(id, token)
            .send(transactionObject)
            .on('transactionHash', function(hash){
              console.log('hash: ', hash)
            })
            .on('receipt', function(receipt) {
              console.log('PAYABLE: this is create receipt:', receipt)
            })
            .on('confirmation', function(confirmationNumber, receipt) {
              console.log('confirmation: ', confirmationNumber, receipt)
            })
            .on('error', function(error) {
              console.error('create failed! Revert:', error)
            })
            .then(function() {
              alert('Done bid!, Please check winners on Etherscan')
            })
          }
          
        })

        //check tokens 
        $("#viewWinner").on('click', function() {
          instance.methods.winners(id, token)
        })
        





        if (web3.version.network !== '3') {
          console.log('Wrong Network!')
        }
      }
      else {
        $('#msg').text('No web3 connection found Please use metamask !')
        $('#alertModal').modal();
      }
    })
  })
});