<?php include('assets/includes/header.php');?>
<!-- Bread crumb  -->
<section class="breadcrumb-area bg-overlay ">
        <div class="container ">
            <div class="row  align-items-center">
                <div class="col-12">
                    <div class="breadcrumb-content">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.php"> गृह पृष्ठ</a></li>
                                <li class="breadcrumb-item active" aria-current="page">ईएमआई क्याल्कुलेटर</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>

<!--End Bread crumb  -->

<!--End Bread crumb  -->
<section class="emi-calculator">
<div class="container">
<div id="border">
    <!--border-->
<div class="row">
    <div class="col-lg-6">
    <div id="emi-calculation">
        <!--calculation part-->

        <p id="title"><strong>EMI Calculator</strong></p>

        <div class="emi-section">
            <!--loan amount with input-->
            <label id="loanamount" class="label">Loan Amount:(Rs)</label>
            <input type="number" class="input" id="value1" placeholder="Enter Loan amount.."></input>
        </div>
        <!--loan amount with input closing-->

        <div class="emi-section">
            <!--interest rate with input-->
            <label id="interestrate" class="label">Interest Rate:(%)</label>
            <input type="number" class="input" id="value2" placeholder="Enter IR per year.."></input>
        </div>
        <!--interest rate with input closing-->

        <div class="emi-section">
            <!--loan terms with input-->
            <label id="loanduration" class="label">Loan Duration(Months):</label>
            <input type="number" class="input" id="value3" placeholder="Enter loan duration.."></input>
        </div>
        <!--loan terms with input closing-->



        <div class="submit">
            <!--button-->
            <button type="submit" id="calc" onclick="calculation()">Calculate</button>
        </div>
        <!--button closing-->

    </div></div>
    <!--Calculation part closing-->
<div class="col-lg-6">
    <div id="emi-output">
        <div class="result">Monthly Interest: <span id="monthly-interest"></span>
        </div>
        <div class="result">Monthly Payment: <span id="monthly-payment"></span>
        </div>
        <div class="result">Total Repayment: <span id="total-repayment"></span>
        </div>
        <div class="result">Total Interest Cost: <span id="total-interest"></span>
        </div>

        <div class="submit">
            <!--button-->
            <button type="submit" id="reset" onclick="reset()">Reset</button>
        </div>
        <!--button closing-->
 </div>
    </div>
</div>
</div>
<!--border closing-->
</div>
</section>
<?php include('assets/includes/footer.php');?>