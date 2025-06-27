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

const GeneralCombobox = ({ options, optionsZ, initialValue, updateSelected }) => {
    const [selectedOption, setSelectedOption] = useState(initialValue);
    const [query, setQuery] = useState("");

    const filteredOption =
        query === ""
            ? options
            : options.filter((option) => {
                  return option.name.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <Combobox
            value={selectedOption}
            onChange={(value) => {
                setSelectedOption(value);
                if (value != null) {
                    updateSelected(value.id);
                }
            }}
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
                    "w-(--input-width) rounded-xl border border-white/5 bg-gray-900 p-1 [--anchor-gap:--spacing(1)] empty:invisible",
                    "transition duration-100 ease-in data-leave:data-closed:opacity-0",
                    optionsZ,
                )}
            >
                {filteredOption.map((option) => (
                    <ComboboxOption
                        key={option.id}
                        value={option}
                        className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10 data-disabled:opacity-40 data-disabled:cursor-not-allowed"
                    >
                        <CheckIcon className="invisible size-4 fill-white group-data-selected:visible" />
                        <div className={"text-sm/6 text-white"}>{option.name}</div>
                    </ComboboxOption>
                ))}
            </ComboboxOptions>
        </Combobox>
    );
};
export default GeneralCombobox;
