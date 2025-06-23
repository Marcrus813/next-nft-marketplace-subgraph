import React, { useState } from "react";

import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOption,
    ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

import { supportedTokens } from "@/config/marketplace/supportedTokens";
import { compareAddressIgnoreCase } from "@/utils/web3/addressUtils";

const payments = [
    { id: supportedTokens[0], name: "ETH", available: true },
    { id: supportedTokens[1], name: "wETH", available: true },
    { id: supportedTokens[2], name: "USDC", available: true },
    { id: supportedTokens[3], name: "DAI", available: true },
    { id: supportedTokens[4], name: "LINK", available: true },
    { id: supportedTokens[5], name: "UNI", available: true },
    { id: supportedTokens[6], name: "wBTC", available: true },
];

const PaymentComboBox = ({ strictPayment, preferredPayment, updateSelected }) => {
    const [selectedPayment, setSelectedPayment] = useState(payments[0]);
    const [query, setQuery] = useState("");

    const filteredPayment =
        query === ""
            ? payments
            : payments.filter((payment) => {
                  return payment.name.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <Combobox
            value={selectedPayment}
            onChange={(value) => setSelectedPayment(value)}
            onClose={() => setQuery("")}
        >
            <div className={"relative"}>
                <ComboboxInput
                    className={clsx(
                        "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white",
                        "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                    )}
                    aria-label={"Assignee"}
                    displayValue={(payment) => payment?.name}
                    onChange={(event) => {
                        setQuery(event.target.value);
                        updateSelected(event.target.id);
                        console.log(event.target.id);
                    }}
                />
                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                    <ChevronDownIcon className="size-4 fill-white/60 group-data-hover:fill-white" />
                </ComboboxButton>
            </div>

            <ComboboxOptions
                anchor={"bottom"}
                transition
                className={clsx(
                    "w-(--input-width) rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:--spacing(1)] empty:invisible",
                    "transition duration-100 ease-in data-leave:data-closed:opacity-0",
                    "z-20",
                )}
            >
                {filteredPayment.map((payment) => (
                    <ComboboxOption
                        key={payment.id}
                        value={payment}
                        disabled={
                            !(
                                strictPayment &&
                                compareAddressIgnoreCase(payment.id, preferredPayment)
                            )
                        }
                        className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10 data-disabled:opacity-40"
                    >
                        <CheckIcon className="invisible size-4 fill-white group-data-selected:visible" />
                        <div className={"text-sm/6 text-white"}>{payment.name}</div>
                    </ComboboxOption>
                ))}
            </ComboboxOptions>
        </Combobox>
    );
};
export default PaymentComboBox;
