/**
 * Invoice Ninja (https://invoiceninja.com)
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2021. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license 
 */class n{constructor(e,t,s){this.shouldDisplaySignature=e,this.shouldDisplayTerms=t,this.shouldDisplayUserInput=s,this.termsAccepted=!1}submitForm(){document.getElementById("approve-form").submit()}displaySignature(){document.getElementById("displaySignatureModal").removeAttribute("style");const t=new SignaturePad(document.getElementById("signature-pad"),{penColor:"rgb(0, 0, 0)"});t.onEnd=function(){document.getElementById("signature-next-step").disabled=!1},this.signaturePad=t}displayTerms(){document.getElementById("displayTermsModal").removeAttribute("style")}displayInput(){document.getElementById("displayInputModal").removeAttribute("style")}handle(){document.getElementById("signature-next-step").disabled=!0,document.getElementById("close-button").addEventListener("click",()=>{const e=document.getElementById("approve-button");console.log("close button"),e&&(e.disabled=!1)}),document.getElementById("close-terms-button").addEventListener("click",()=>{const e=document.getElementById("approve-button");console.log("close terms-button"),e&&(e.disabled=!1)}),document.getElementById("approve-button").addEventListener("click",()=>{!this.shouldDisplaySignature&&!this.shouldDisplayTerms&&this.shouldDisplayUserInput&&(this.displayInput(),document.getElementById("input-next-step").addEventListener("click",()=>{document.querySelector('input[name="user_input"').value=document.getElementById("user_input").value,this.termsAccepted=!0,this.submitForm()})),this.shouldDisplayUserInput&&this.displayInput(),this.shouldDisplaySignature&&this.shouldDisplayTerms&&(this.displaySignature(),document.getElementById("signature-next-step").addEventListener("click",()=>{this.displayTerms(),document.getElementById("accept-terms-button").addEventListener("click",()=>{document.querySelector('input[name="signature"').value=this.signaturePad.toDataURL(),document.querySelector('input[name="user_input"').value=document.getElementById("user_input").value,this.termsAccepted=!0,this.submitForm()})})),this.shouldDisplaySignature&&!this.shouldDisplayTerms&&(this.displaySignature(),document.getElementById("signature-next-step").addEventListener("click",()=>{document.querySelector('input[name="signature"').value=this.signaturePad.toDataURL(),document.querySelector('input[name="user_input"').value=document.getElementById("user_input").value,this.submitForm()})),!this.shouldDisplaySignature&&this.shouldDisplayTerms&&(this.displayTerms(),document.getElementById("accept-terms-button").addEventListener("click",()=>{this.termsAccepted=!0,this.submitForm()})),!this.shouldDisplaySignature&&!this.shouldDisplayTerms&&!this.shouldDisplayUserInput&&this.submitForm()})}}const i=document.querySelector('meta[name="require-quote-signature"]').content,u=document.querySelector('meta[name="show-quote-terms"]').content,l=document.querySelector('meta[name="accept-user-input"]').content;new n(!!+i,!!+u,!!+l).handle();