<?php
/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2021. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

namespace App\Factory;

use App\Models\RecurringExpense;

class RecurringExpenseFactory
{
    public static function create(int $company_id, int $user_id) :RecurringExpense
    {
        $recurring_expense = new RecurringExpense();
        $recurring_expense->user_id = $user_id;
        $recurring_expense->company_id = $company_id;
        $recurring_expense->is_deleted = false;
        $recurring_expense->should_be_invoiced = false;
        $recurring_expense->tax_name1 = '';
        $recurring_expense->tax_rate1 = 0;
        $recurring_expense->tax_name2 = '';
        $recurring_expense->tax_rate2 = 0;
        $recurring_expense->tax_name3 = '';
        $recurring_expense->tax_rate3 = 0;
        $recurring_expense->date = null;
        $recurring_expense->payment_date = null;
        $recurring_expense->amount = 0;
        $recurring_expense->foreign_amount = 0;
        $recurring_expense->private_notes = '';
        $recurring_expense->public_notes = '';
        $recurring_expense->transaction_reference = '';
        $recurring_expense->custom_value1 = '';
        $recurring_expense->custom_value2 = '';
        $recurring_expense->custom_value3 = '';
        $recurring_expense->custom_value4 = '';
        
        return $recurring_expense;
    }
}