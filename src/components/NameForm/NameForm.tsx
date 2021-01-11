import "./nameForm.css"
import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from "@material-ui/core";
import "./nameForm.css";


interface NameFormProps {
    userName: string
    setUserName: (arg: string) => void
}

export function NameForm({ userName, setUserName }: NameFormProps) {
    const setName = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    return (
        <div className="NameForm" >
        <TextField fullWidth className="NameForm" id="outlined-basic" placeholder="Username" variant="outlined" value={userName} onChange={setName} InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            ),
        }} />
        </div>
    );
}